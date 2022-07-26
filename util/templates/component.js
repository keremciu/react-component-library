module.exports = (componentName) => ({
  content: `
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import styles from "./${componentName}.module.scss";

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <div className={styles.foo}>{foo}</div>
);

export default ${componentName};

`,
  extension: `.tsx`
});
