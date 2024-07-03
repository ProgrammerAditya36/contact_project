export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form role="search" id="search-form">
            <input type="search" id="q" aria-label="Search Contacts" placeholder="search" />
          </form>
        </div>
      </div>
    </>
  );
}
