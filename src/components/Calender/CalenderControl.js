import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function CalenderContorol({ year, month, handlePrevMonth, handleNextMonth }) {
  return (
    <DateContorol>
      <MoveButton type="button" onClick={handlePrevMonth}>
        <AiFillCaretLeft />
      </MoveButton>

      <DateWrap>
        <TextYear>{year}</TextYear>
        <TextMonth>{month}</TextMonth>
      </DateWrap>
      <MoveButton type="button" onClick={handleNextMonth}>
        <AiFillCaretRight />
      </MoveButton>
    </DateContorol>
  );
}

const DateContorol = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  padding: 10px 50px;
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 20px;
  background-color: #cee2f2;
`;

const MoveButton = styled.button`
  background: none;
  padding: 5px 50px 0;
  font-size: 2em;
`;

const DateWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextYear = styled.strong`
  text-align: left;
  font-size: 1em;
`;

const TextMonth = styled.strong`
  text-align: left;
  font-size: 2em;
`;

CalenderContorol.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  handlePrevMonth: PropTypes.func.isRequired,
  handleNextMonth: PropTypes.func.isRequired,
};
