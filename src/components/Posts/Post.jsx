import Link from "next/link";

export default async function Posts() {
    const response = await fetch(
        "https://believemy-tuto-default-rtdb.europe-west1.firebasedatabase.app/articles.json",
        {
            next: {
                revalidate: 5,
            },
        }
    );
    const data = await response.json();

    const posts = [];

    for (const key in data) {
        posts.push({
            id: key,
            ...data[key],
        });
    }

    return (
        <>
            {posts.map((post) => (
                <div key={post.id} className="ms-10">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </div>
            ))}
        </>
    );
}
