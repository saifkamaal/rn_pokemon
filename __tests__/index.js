import React from "react";
import Enzyme, { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../app/components/Button/Button";
import Header from "../app/components/Header";
import PokemonList from "../app/components/PokemonList/pokemonList";
import PokemonDetails from "../app/components/PokemonDetails/pokemonDetails";

Enzyme.configure({ adapter: new Adapter() });

describe("Testing Button component", () => {
  it("renders as expected", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Testing Header component", () => {
  it("renders as expected", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Testing PokemonDetails component", () => {
  it("renders as expected", () => {
    const wrapper = shallow(<PokemonDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Testing PokemonList component", () => {
  it("renders as expected", () => {
    const pokemons = [
      {
        name: "Saif",
        url: "http://google.com"
      }
    ];
    const wrapper = shallow(<PokemonList pokemons={pokemons} />);
    expect(wrapper).toMatchSnapshot();
  });
});
