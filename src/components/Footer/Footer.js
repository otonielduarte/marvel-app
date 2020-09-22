import React, { useContext, useState, useEffect, useCallback } from 'react';
import './Footer.scss';
import AppContext from '../../context/context';
import ReactPaginate from 'react-paginate';

const Footer = props => {

	const { total, onPaginate, attributions } = useContext(AppContext);
	const [display, setDisplay] = useState(4);

	useEffect(() => {
		window.addEventListener('resize', updateSize);
		updateSize();
	})

	const updateSize = useCallback(() => {
		if (window.innerWidth < 800) {
			setDisplay(2);
		} else {
			setDisplay(4);
		}
	}, [])

	return (
		<footer className="App-footer">
			<div className="PaginationComponent">
				{total > 1 && <ReactPaginate
					previousLabel={'<'}
					previousLinkClassName={"page-link"}
					nextLabel={'>'}
					nextLinkClassName={"page-link"}
					initialPage={0}
					breakClassName={'break-me'}
					breakLinkClassName={"page-link"}
					pageLinkClassName={"page-link"}
					pageCount={total}
					marginPagesDisplayed={0}
					pageRangeDisplayed={display}
					onPageChange={item => onPaginate(item.selected)}
					subContainerClassName={"page-item"}
					pageClassName={"page-item"}
					activeClassName={'active'}
					disableInitialCallback
					activeLinkClassName={"page-link"}
				/>}
			</div>
			<div className="attributions">
				<div dangerouslySetInnerHTML={{__html: attributions.attributionHTML}}></div>
				{attributions.attributionText}
			</div>
		</footer>
	);
}

export default Footer;
