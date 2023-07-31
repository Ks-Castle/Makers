import flex from "@/assets/styles/flex";
import { LOCALSTORAGE } from "@/data/str.js";
import { memo } from "react";
import styled from "styled-components";

interface PropsType {
  total: number;
  limit: number;
  page: number;
  setPage: (num: number) => void;
}

const Pagination = ({ total, limit, page, setPage }: PropsType) => {
  const theme = localStorage.getItem(LOCALSTORAGE.THEME);
  const numPages = Math.ceil(total / limit);

  const onPrevPageHandler = () => {
    setPage(page - 1);
  };
  const onNextPageHandler = () => {
    setPage(page + 1);
  };
  const onFirstPageHandler = () => {
    const temp = 1;
    setPage(temp);
  };
  const onLastPageHandler = () => {
    const temp = numPages;
    setPage(temp);
  };

  return (
    <StPagination>
      <StButton
        onClick={onFirstPageHandler}
        disabled={page === 1}
        theme={theme}
      >
        &lt;&lt;
      </StButton>
      <StButton onClick={onPrevPageHandler} disabled={page === 1} theme={theme}>
        &lt;
      </StButton>
      <p style={{ margin: "2rem", fontWeight: "700" }}>
        {page}/{numPages}
      </p>
      <StButton
        onClick={onNextPageHandler}
        disabled={page === numPages}
        theme={theme}
      >
        &gt;
      </StButton>
      <StButton
        onClick={onLastPageHandler}
        disabled={page === numPages}
        theme={theme}
      >
        &gt;&gt;
      </StButton>
    </StPagination>
  );
};

export default memo(Pagination);

const StPagination = styled.div`
  ${flex({})}
`;

const StButton = styled.button<{ theme: string }>`
  width: 30px;
  height: 30px;
  margin: 5px;
  background-color: black;
  box-shadow: ${(props) => (props.theme === "true" ? "black" : "white")};
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  border: 1px solid var(--dark-000);
  cursor: pointer;
  &:hover {
    color: #fff;
    opacity: 50%;
  }
  &[disabled] {
    opacity: 0;
    cursor: revert;
    transform: revert;
  }
`;
