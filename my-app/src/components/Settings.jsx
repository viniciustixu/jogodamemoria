export default function Settings() {
  return (
    <>
      <h2>Settings</h2>
      <div>
        <label htmlFor='iEasyTime'>
          <input type='number' id='iEasyTime' />
          Easy max time (Default: 120)
        </label>

        <label htmlFor='iMediumTime'>
          <input type='number' id='iMediumTime' />
          Medium max time (Default: 90)
        </label>

        <label htmlFor='iHardTime'>
          <input type='number' id='iHardTime' />
          Hard max time (Default: 60)
        </label>
      </div>
    </>
  );
}
