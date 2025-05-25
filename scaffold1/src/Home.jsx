import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal, isModalOpen } = useGlobalContext();
  const handleClickOutside = () => {
    if(isModalOpen){
      alert('Modal content');
    }else{
      openModal();
    }
  };

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn'onClick={handleClickOutside}>
        show modal
      </button>
    </main>
  );
};
export default Home;