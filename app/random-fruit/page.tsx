// Composant client
"use client";

// Imports des composants nécessaires
import { Card, CardDescription, CardHeader, CardImage, CardTitle } from "@ui/card";
import Button from "@comps/ui/button";
import { RandomFruit, RandomFruits } from "@/actions/fruits";
import { useState } from "react";

// Composant Page Fruits
export default function FruitsPage() {
    const [fruitList, setFruitList] = useState<RandomFruit[]>([]);

    const GetFruit = async () => {
        const newFruit = await RandomFruits();

        if (newFruit) {
            const newFruitList = [...fruitList, newFruit];
            setFruitList(newFruitList);
        }
    };

    // Afficher le contenu de la page
    return (
        <main className="flex flex-1 flex-col items-center justify-center gap-2 overflow-y-auto px-6 pb-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
                {fruitList.map((fruit, index) => (
                    <Card
                        key={index}
                        className="w-[300px] overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-md hover:shadow-gray-300"
                    >
                        <CardImage src={fruit.image} width={400} height={500} alt={fruit.nom} />
                        <CardHeader>
                            <CardTitle>{fruit.nom}</CardTitle>
                            <CardDescription>Fruit exotique</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
            <Button type="button" className="px-4 py-2" onClick={GetFruit}>
                {fruitList ? "Obtenir un fruit" : "Encore un fuit ?"}
            </Button>
        </main>
    );
}
