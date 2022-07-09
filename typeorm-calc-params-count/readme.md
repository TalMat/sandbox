An MSSQL query has a maximum param count allowed. This means that batching calls using typeorm is required, but it is tedious and error-prone to manually maintain the number of params an entity has in non-local code.

This is a method that can be added to typeorm entities to return the param count for that entity, to calculate an available batch size for db operations with MSSQL.
