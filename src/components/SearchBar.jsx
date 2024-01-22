export const SearchBar = ({ filters: { topic, level }, onUpdateTopic,onUpdateLevel,onReset }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Topic filter"
        value={topic}
        onChange={event => onUpdateTopic(event.target.value)}
      />
      <select value={level} onChange={event => onUpdateLevel(event.target.value)}>
        <option value="all">All</option>
        <option value="beginner">Beginer</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advenced</option>
      </select>
      <button type="button" onClick={onReset}>Reset filters</button>
    </div>
  );
};