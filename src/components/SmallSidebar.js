import { FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { toggleSidebar } from '../features/user/userSlice';
import Logo from './Logo';
import NavLinks from './NavLinks';

export const SmallSidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container show-sidebar'
            : ' sidebar-container'
        }
      >
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={() => dispatch(toggleSidebar())} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
