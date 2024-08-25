// "use server";
export default async function Article({ params: { id } }) {
    const response = await fetch("http://localhost:3000/api/articles", {
        method: "POST",
        body: JSON.stringify({ id }),
    });

    const article = await response.json();

    return (
        <div className="w-[800px] mx-auto">
            <h2 className="text-center text-3xl">{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
}
