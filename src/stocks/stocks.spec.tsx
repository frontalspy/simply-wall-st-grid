import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { createSandbox, SinonSandbox, SinonStub } from 'sinon';
import { PaginationControls } from '../shared/pagination/controls-pagination';
import { StocksGrid } from './grid/stocks-grid';
import { StockItem } from './item/item-stocks';
import { StockSort } from './sort/sort-stocks';
import { Stocks } from './stocks';
import * as StocksHooks from './stocks.hooks';
import { MockStocks } from './stocks.mock';

describe('Stocks', () => {
  let sandbox: SinonSandbox;
  let getStocksStub: SinonStub;
  let loadStocks: () => ShallowWrapper<typeof Stocks>;

  beforeEach(() => {
    sandbox = createSandbox();
    getStocksStub = sandbox.stub(StocksHooks, 'useGetStocks');
    loadStocks = () => shallow(<Stocks />);
  });

  afterEach(() => {
    sandbox.restore();
  });
  describe('when loading component', () => {
    it('should render the loading block when data is not yet ready', () => {
      const stocks = loadStocks();
      expect(stocks.find('.loading').exists(), 'Loading div not found').to.be
        .true;
    });
    it('should render 3 stock items when data is ready', () => {
      getStocksStub.returns(MockStocks);
      const stocks = loadStocks();
      const grid = stocks.find(StocksGrid).dive();
      expect(grid.find(StockItem).length, '3 items not found').to.be.eq(3);
    });
    it('should render error message if useGetStocks fails', () => {
      getStocksStub.returns([undefined, true]);
      const stocks = loadStocks();
      expect(stocks.find('.error').exists(), 'Error div not found').to.be.true;
    });
  });
  describe('when interacting with the component', () => {
    it('Should change sort order when sort is updated', () => {
      const stocks = loadStocks();
      expect(getStocksStub, 'Getstocks not called on init').to.be.calledWith(
        0,
        20,
        'asc'
      );
      stocks.find(StockSort).props().sortCallback.call(this, 'desc');
      expect(
        getStocksStub,
        'Getstocks did not get called with updated sort order'
      ).to.be.calledWith(0, 20, 'desc');
    });
    it('Should increment the page number when pagination is increased', () => {
      const stocks = loadStocks();
      expect(getStocksStub, 'Getstocks not called on init').to.be.calledWith(
        0,
        20,
        'asc'
      );
      stocks.find(PaginationControls).props().nextPage.call(this);
      expect(
        getStocksStub,
        'Getstocks did not get called with incremental page number'
      ).to.be.calledWith(1, 20, 'asc');
    });
    it('Should decrease the page number when pagination is increased', () => {
      const stocks = loadStocks();
      expect(getStocksStub, 'Getstocks not called on init').to.be.calledWith(
        0,
        20,
        'asc'
      );
      stocks.find(PaginationControls).props().nextPage.call(this); // 1
      stocks.find(PaginationControls).props().nextPage.call(this); // 2
      stocks.find(PaginationControls).props().nextPage.call(this); // 3
      stocks.find(PaginationControls).props().prevPage.call(this); // 2
      expect(
        getStocksStub.lastCall,
        'Getstocks did not get called with reduced page number'
      ).to.be.calledWith(2, 20, 'asc');
    });
  });
});
