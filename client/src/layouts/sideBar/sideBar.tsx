import style from './sideBar.module.css';
function SideBar() {
  return (
    <div className={style.sideBar}>
      <div className={style.noteBooks}>
        <div>NoteBooks</div>
      </div>
      <div>Trash</div>
      <div>Setting</div>
    </div>
  );
}

export default SideBar;
