import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Footer.scss';
import ReactPaginate from 'react-paginate';
import { useSearch } from '../../hooks/search';

const Footer: React.FC = () => {
  const { pageInfo, onPaginate, attributionText } = useSearch();
  const [display, setDisplay] = useState(4);

  const updateSize = useCallback(() => {
    if (window.innerWidth < 800) {
      setDisplay(2);
    } else {
      setDisplay(4);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [updateSize]);

  const total = useMemo(() => {
    return parseInt(pageInfo.total, 10);
  }, [pageInfo]);

  const page = useMemo(() => {
    return parseInt(pageInfo.page, 10);
  }, [pageInfo]);

  return (
    <footer className="App-footer">
      <div className="PaginationComponent">
        {total > 1 && (
          <ReactPaginate
            previousLabel="<"
            previousLinkClassName="page-link"
            nextLabel=">"
            nextLinkClassName="page-link"
            initialPage={page}
            breakClassName="break-me"
            breakLinkClassName="page-link"
            pageLinkClassName="page-link"
            pageCount={total}
            marginPagesDisplayed={0}
            pageRangeDisplayed={display}
            onPageChange={item => onPaginate(item.selected)}
            pageClassName="page-item"
            activeClassName="active"
            disableInitialCallback
            activeLinkClassName="page-link"
          />
        )}
      </div>
      <div className="attributions">
        <a href="http://marvel.com"> {attributionText}</a>
      </div>
    </footer>
  );
};

export default Footer;
