import React, { useState, useEffect, useCallback } from 'react';
import './Footer.scss';
import ReactPaginate from 'react-paginate';
import { useSearch } from '../../context/context';

const Footer = props => {

	const { pageInfo: { total, page }, onPaginate, attributions } = useSearch();
	const [display, setDisplay] = useState(4);

	const updateSize = useCallback(() => {
		if (window.innerWidth < 800) {
			setDisplay(2);
		} else {
			setDisplay(4);
		}
	}, [])

  useEffect(() => {
		window.addEventListener('resize', updateSize);
    return (() => window.removeEventListener('resize'))
	}, [updateSize])

	return (
		<footer className="App-footer">
			<div className="PaginationComponent">
				{total > 1 && <ReactPaginate
					previousLabel={'<'}
					previousLinkClassName={"page-link"}
					nextLabel={'>'}
					nextLinkClassName={"page-link"}
					initialPage={page}
					breakClassName={'break-me'}
					breakLinkClassName={"page-link"}
					pageLinkClassName={"page-link"}
					pageCount={total}
					marginPagesDisplayed={0}
					pageRangeDisplayed={display}
					onPageChange={item => onPaginate(item.selected)}
					pageClassName={"page-item"}
					activeClassName={'active'}
					disableInitialCallback
					activeLinkClassName={"page-link"}
				/>}
			</div>
			<div className="attributions">
				<div dangerouslySetInnerHTML={{ __html: attributions.attributionHTML }}></div>
				{attributions.attributionText}
			</div>
		</footer>
	);
}

export default Footer;
