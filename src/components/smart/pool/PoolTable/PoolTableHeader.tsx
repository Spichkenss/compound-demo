export const PoolTableHeader = () => {
  return (
    <table style={{ width: "100%", tableLayout: "fixed", background: "#212122", paddingBlock: 5 }}>
      <thead>
        <tr>
          <th>Имя пула</th>
          <th>Статус</th>
          <th>Тип RAID</th>
          <th>Размер (RAW)</th>
          <th>Свободно</th>
          <th>Режим</th>
        </tr>
      </thead>
    </table>
  );
};
