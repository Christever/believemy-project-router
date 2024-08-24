"use client";

import { create } from "@/actions/create-post";
import Button from "@/components/Button/Button";

import { redirect, useRouter } from "next/navigation";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Create() {
    const title = useRef("");
    const content = useRef("");
    const form = useRef("");

    const router = useRouter();

    const prepareNewArticle = async () => {
        try {
            await create(title.current.value, content.current.value);
        } catch (error) {
            toast.error(error.message);
        }

        toast.success("Article crée");
        form.current.reset();
        redirect("/");
    };

    return (
        <>
            <h1 className="text-4xl font-semibold text-center">
                Creer un post
            </h1>
            <div className="w-[500px] p-5 mx-auto bg-gray-100 rounded-xl border mt-4">
                <form ref={form} action={prepareNewArticle}>
                    <div>
                        <input
                            type="text"
                            placeholder="Titre"
                            className="px-4 py-2 w-full rounded"
                            ref={title}
                        />
                    </div>
                    <div className="mt-4">
                        <textarea
                            placeholder="Contenu"
                            className="px-4 py-2 w-full rounded"
                            ref={content}
                        />
                    </div>

                    <div className="flex justify-end mt-4">
                        <Button>Ajouter</Button>
                    </div>
                </form>
            </div>
        </>
    );
}
