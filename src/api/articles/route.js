import { NextResponse } from "next/server";

export async function POST(request) {
    const d = await request.json();
    const id = d.id;
    try {
        const response = await fetch(
            `https://believemy-tuto-default-rtdb.europe-west1.firebasedatabase.app/articles/${id}.json`
        );
        const data = await response.json();

        if (!response.ok) {
            throw new Error("Cet article n'existe pas.");
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        throw new Error(error.message);
    }
}
