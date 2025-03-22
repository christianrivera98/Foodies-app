
interface Props {
    params:{
        slug:string;
    };
}
export default function SlugPage({params}: Props) {
  return (
    <main>
        <h1>Meal: {params.slug}</h1>
    </main>
  );
}
