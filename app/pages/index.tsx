// pages/index.tsx
import React, { useEffect, useState } from "react";

// ポケモンのデータを取得する関数
const fetchPokemon = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
  }
};

const HomePage: React.FC = () => {
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
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>高さ: {pokemon.height}dm</p>
      <p>重さ: {pokemon.weight}hg</p>
      <p>ID: {pokemon.id}</p>
    </div>
  );
};

export default HomePage;
