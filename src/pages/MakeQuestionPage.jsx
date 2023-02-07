export const MakeQuestion = () => {
  return (
    <>
      <form action="">
        <label for="size">Theme</label>
        <select id="size" name="size">
          <option value="xs">Extra Small</option>
          <option value="s">Small</option>
          <option value="m" selected>
            Medium
          </option>
          <option value="l">Large</option>
        </select>
        <label>
          Username
          <input type="text" name="username" autofocus />
        </label>
        <label>
          Feedback
          <textarea
            name="feedback"
            rows="5"
            placeholder="Type your message here..."
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
