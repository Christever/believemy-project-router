// "use server";
export default async function Article({ params: { id } }) {
    const response = await fetch("http://localhost:3000/api/articles", {
        method: "POST",
        body: JSON.stringify({ id }),
    });

    const article = await response.json();

    return (
        <>
            <h2 className="text-center text-3xl">{article.title}</h2>
        </>
    );
}
