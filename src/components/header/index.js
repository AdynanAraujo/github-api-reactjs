import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import { MdOutlinePersonSearch } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <div className="githubImage">
          <DiGithubBadge size={200} />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Digite um username"
            onChange={(event) => setUsernameForSearch(event.target.value)}
          />
          <button type="submit" onClick={submitGetUser}>
            <MdOutlinePersonSearch className="searchUser" size={25} />
          </button>
        </div>
      </S.Wrapper>
    </header>
  );
};

export default Header;
