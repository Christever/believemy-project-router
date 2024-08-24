import Posts from "@/components/Posts/Post";
import { Suspense } from "react";

export default async function Index() {
    return (
        <div className="text-center">
            <h1 className="text-4xl mb-6 font-semibold">Accueil</h1>
            <Suspense fallback={<p>Chargement...</p>}>
                <Posts />
            </Suspense>
        </div>
    );
}
