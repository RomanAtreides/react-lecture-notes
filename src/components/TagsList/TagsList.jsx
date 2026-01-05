import { Tag } from "../Tag/Tag";
import styles from "./TagsList.module.css";

export const TagsList = function TagsList({ tags, onTagClick }) {
    return (
        <div className={styles.tags}>
            {tags.map((tag) => (
                <Tag key={tag} onClick={() => onTagClick(tag)} tag={tag} />
            ))}
        </div>
    );
};
