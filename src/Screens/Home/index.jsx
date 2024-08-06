import { Input } from '../../components/inputs';

import Logo from '../../components/logo';

import Search from '../../assets/search.svg';

import { Header } from './styles';

export function Home() {
  return (
    <>
      <Header>
        <div>
          <a>Home</a>
          <a>Catalog</a>
          <a>Contact</a>
          <a>Features</a>
        </div>

        <Logo />

        <Input placeholder="Search games & products..">
          <img src={Search} placeholder="logo-search" />
        </Input>
      </Header>
    </>
  );
}
