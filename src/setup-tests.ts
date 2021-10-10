import chai from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

// Setup testing tools
configure({ adapter: new Adapter() });
chai.use(sinonChai);
