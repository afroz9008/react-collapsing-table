//React
import React from 'react';
import { RowsPropType } from '../utils/propTypes';
//Components
import Row from './Row';
import ExpandedRow from './ExpandedRow';

const Rows = ({ rows, visibleColumns, hiddenColumns, expandRow, callbacks, icons }) => {
    const tableRows = rows.reduce((r, row, index) => r.concat(
        <Row key={ `${index}-1` }
             rowIndex={ index }
             row={ row }
             icons={ icons }
             visibleColumns={ visibleColumns }
             hiddenColumns={ hiddenColumns }
             callbacks={ callbacks }
             expandRow={ expandRow } />,
        row.isOpen ? <ExpandedRow key={ `${index}-2` }
                     row={ row }
                     columns={ hiddenColumns }
                     callbacks={ callbacks }
                     colspan={ visibleColumns.length } /> : null), []);
    
    if (tableRows.length > 0) {
        return (
            <tbody>
            { tableRows }
            </tbody>
        );
    } else {
        return (
            <tbody>
                <tr className="no-results">
                    <td colSpan={visibleColumns.length}>Sorry, your search did not return any results. Please try again.</td>
                </tr>
            </tbody>
        );
    } 
};

Rows.propTypes = RowsPropType;

export default Rows
