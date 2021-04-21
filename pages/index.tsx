import { signIn, signOut, useSession } from 'next-auth/client';

export default function Page() {
  const [session, loading] = useSession();

  if (loading) {
    return <div>loading...</div>;
  }

  const testAPI = () =>
    fetch('/api/hello/test')
      .then((res) => {
        console.log(res.ok);
      })
      .catch((err) => {
        console.log(err);
      });

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <button onClick={testAPI}>Test API</button>
        </>
      )}
    </>
  );
}
