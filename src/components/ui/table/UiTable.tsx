import React from 'react';

import styles from './UiTable.scss';
import { UiTableRow } from './row/UiTableRow';

interface Props {
  label?: string;
  heading?: string[];
}

type Composition = {
  Row: typeof UiTableRow;
};

const UiTable: React.FC<Props> & Composition = ({
  label,
  heading,
  children,
}) => {
  const isHeadingView = Array.isArray(heading);

  const headingEls = heading?.map((phrase) => (
    <th key={phrase}>
      <h4>{phrase}</h4>
    </th>
  ));

  return (
    <table className={styles.uiTable}>
      {label && <caption className="h3">{label}</caption>}
      {isHeadingView && (
        <thead>
          <tr>{headingEls}</tr>
        </thead>
      )}
      <tbody>{children}</tbody>
    </table>
  );
};

UiTable.Row = UiTableRow;

export { UiTable };
