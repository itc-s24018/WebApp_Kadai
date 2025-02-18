"use client";

// app/pokemon/page.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";


// ポケモンのデータを取得する関数
const fetchPokemon = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return null;
  }
};

const PokemonPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchPokemon("pikachu"); // ここでポケモン名を指定
      setPokemon(data);
    };

    getPokemon();
  }, []);

  // ポケモンデータがまだ取得されていない場合の処理
  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h1>ポケモン情報</h1>
      <h2>{pokemon.name}</h2>

      <Image
        src={pokemon.sprites?.front_default || "/fallback.png"}
        alt={pokemon.name || "Unknown Pokémon"}
        width={96} // 画像の幅を指定
        height={96} // 画像の高さを指定
        priority // ページ読み込み時に優先的に読み込む
      />

      {" "}
      <p>高さ: {pokemon.height}dm</p>
      <p>重さ: {pokemon.weight}hg</p>
      <p>ID: {pokemon.id}</p>
    </div>
  );
};

export default PokemonPage;
