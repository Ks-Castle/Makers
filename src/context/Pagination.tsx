import flex from "@/assets/styles/flex";
import { memo } from "react";
import styled from "styled-components";

interface PropsType {
  total: number;
  limit: number;
  page: number;
  setPage: (num: number) => void;
}

const Pagination = ({ total, limit, page, setPage }: PropsType) => {
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
      <StButton onClick={onFirstPageHandler} disabled={page === 1}>
        &lt;&lt;
      </StButton>
      <StButton onClick={onPrevPageHandler} disabled={page === 1}>
        &lt;
      </StButton>
      <p style={{ margin: "2rem", fontWeight: "700" }}>
        {page}/{numPages}
      </p>
      <StButton onClick={onNextPageHandler} disabled={page === numPages}>
        &gt;
      </StButton>
      <StButton onClick={onLastPageHandler} disabled={page === numPages}>
        &gt;&gt;
      </StButton>
    </StPagination>
  );
};

export default memo(Pagination);

const StPagination = styled.div`
  ${flex({})}
`;

const StButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 5px;
  background-color: black;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  border: none;
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
