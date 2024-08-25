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
            <div className="w-[800px] mx-auto border border-gray-400 rounded-3xl mt-3">
                <p className="p-3">{article.content}</p>
            </div>
        </>
    );
}
