import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import '../styles/QuestionScreen.css'

function ListScreen() {
  const [questions, setQuestions] = useState([]);
  const [health, setHealth] = useState("");
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(10);
  const [filter, setFilter] = useState(null);

  // create function that uses axios to retrieve information from the API, in these case, the qustions
  const getQuestions = async () => {
    try {
      const response = await axios.get(
        "https://private-anon-23d6aa8ecf-blissrecruitmentapi.apiary-mock.com/questions?limit=${limit}&offset=${offset}&filter=${filter}"
      );

      setQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // this hook will write the information on the page everytime it's refreshed
  useEffect(() => {
    getQuestions();
  }, []);

  // First wi'll map over the list os questions stored on the "questions" array
  // Then we'll map over the languages available to vote and the vote itself
  return (
    <div className="listings">
      {questions.map((question) => {
        return (
          <article className="questionsCard" key={question.id}>
            <img src={question.image_url} alt="question" />
            <NavLink to={`/questions/${question.id}`}>
              <h3>{question.question}</h3>
            </NavLink>
            {/* <h2>{question.question}</h2> */}

            <h4>Voting Options:</h4>
            {question.choices.map((language) => {
              return (
                <article>
                  <h6>
                    <b>Language:</b> {language.choice}
                  </h6>
                  <h6>
                    <b>Votes:</b> {language.votes}
                  </h6>
                </article>
              );
            })}
          </article>
        );
      })}
    </div>
  );
}

export default ListScreen;
