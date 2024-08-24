// "use server";
export default async function Article({ params: { id } }) {
    const response = await fetch("http://localhost:3000/api/articles", {
        method: "POST",
        body: JSON.stringify({ id }),
    });

    const data = response.json();
    console.log(data);

    return (
        <>
            <h2>{id}</h2>
        </>
    );
}
