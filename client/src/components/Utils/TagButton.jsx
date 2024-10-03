export default function TagButton({ tags, onSelect }) {
    return (
      <div>
        {tags.map((tag, index) => (
          <button key={index} onClick={()=>onSelect(tag)}>
            {tag}
          </button>
        ))}
      </div>
    );
  }

