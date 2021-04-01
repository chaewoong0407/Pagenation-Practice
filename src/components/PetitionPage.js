import React, { useState } from "react";
import Pagenation from "./common/Pagenation";

const PetitionPage = () => {
  const getPeitions = () => {
    const petitions = [
      {
        id: 20,
        title: "전공동아리 시간을 좀 더 늘려주세요!",
        agreed: 85,
        end_at: "2020.11.09",
      },
      {
        id: 19,
        title: "점심시간에 운동장에 노래 틀어주세요..",
        agreed: 40,
        end_at: "2020.11.09",
      },
      {
        id: 18,
        title: "1학년 싱가포르 보내주세요 제발요",
        agreed: 100,
        end_at: "2020.11.08",
      },
      {
        id: 17,
        title: "2학년 자유여행 꼭 보내주세요",
        agreed: 168,
        end_at: "2020.11.07",
      },
      {
        id: 16,
        title: "전공캠프 횟수를 늘려주세요!!",
        agreed: 20,
        end_at: "2020.11.05",
      },
      {
        id: 16,
        title: "전공캠프 횟수를 늘려주세요!!",
        agreed: 20,
        end_at: "2020.11.05",
      },
    ];
    return petitions;
  };

  const [petitions, setPetitions] = useState({
    data: getPeitions(),
    pageSize: 5,
  });

  const { length: count } = petitions.data;
  if (count === 0) return <div>청원이 없습니다.</div>;

  return (
    <>
      <div>{count} 개의 영화 정보가 있습니다.</div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release</th>
          </tr>
        </thead>
        <tbody>
          {petitions.data.map((petition) => (
            <tr key={petition.id}>
              <td>{petition.id}</td>
              <td>{petition.title}</td>
              <td>{petition.agreed}</td>
              <td>{petition.end_at}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagenation itemsCount={count} pageSize={petitions.pageSize} />
    </>
  );
};

export default PetitionPage;
