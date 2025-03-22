import Link from 'next/link';

export default function MealsPage()  {
  return (
    <main>
        <h1>This is the Meal Page</h1>
        <Link href={"/share"}>
            Go to Share
        </Link>
    </main>
  );
};
