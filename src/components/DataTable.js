// src/components/DataTable.js
import React from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import "./DataTable.css";
import coldplayImage from '../images/coldplay.jpeg';
import jbImage from '../images/jb.jpeg';
import madonaImage from '../images/madona.jpeg';
import drakeImage from '../images/drake.jpeg';
import edsheraanImage from '../images/ed_sheeran.jpeg';

const DataTable = () => {
  const { t } = useTranslation();

  const data = React.useMemo(
    () => [
      {
        songName: "I Had Some Help (Feat. Morgan Wallen)",
        artist: "Morgan Wallen Post Malone",
        dateStreamed: "2024-08-01",
        streamCount: 150,
        userId: "user123",
        imageUrl: edsheraanImage,
      },
      {
        songName: "Good Luck, Babe!",
        artist: "Chappell Roan",
        dateStreamed: "2024-08-02",
        streamCount: 200,
        userId: "user456",
        imageUrl: coldplayImage,
      },
      {
        songName: "Who",
        artist: "Jimin",
        dateStreamed: "2024-08-03",
        streamCount: 250,
        userId: "user789",
        imageUrl: madonaImage,
      },
      {
        songName: "Die With A Smile",
        artist: "Bruno MarsLady Gaga",
        dateStreamed: "2024-08-04",
        streamCount: 300,
        userId: "user101",
        imageUrl: drakeImage,
      },
      {
        songName: "BIRDS OF A FEATHER",
        artist: "Billie Eilish",
        dateStreamed: "2024-08-05",
        streamCount: 350,
        userId: "user102",
        imageUrl: jbImage,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Song Name",
        accessor: "songName",
        Cell: ({ row }) => (
          <div className="song-name-cell">
            <img src={row.original.imageUrl} alt="Song" className="song-image" />
            {row.original.songName}
          </div>
        ),
      },
      { Header: "Artist", accessor: "artist" },
      {
        Header: "Date Streamed",
        accessor: "dateStreamed",
      },
      {
        Header: "Stream Count",
        accessor: "streamCount",
      },
      { Header: "User ID", accessor: "userId" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <div className="tablesection">
      <div className="container">
        <div className="logorecentstream">{t('Recent Streams')}</div>
        <div className="searchContainer">
          <FaSearch />
          <input
            type="text"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search all columns..."
            className="searchInput"
          />
        </div>
      </div>
      <div className="tableContainer">
        <table {...getTableProps()} className="table">
          <thead className="thead">
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="th"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="tbody">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()} className="tr">
                  {row.cells.map((cell) => (
                    <td key={cell.column.id} {...cell.getCellProps()} className="td">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
