clean:
	rm -rf node_modules/*

install:
	npm install

test:
	npm test

test-cov:
	npm run test:coverage

.PHONY: test
