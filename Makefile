install:
	npm ci

brain-games:
	node bin/my-brain-games.js

brain-even:
	node bin/game-even.js

brain-calc:
	node bin/game-calc.js

brain-gcd:
	node bin/game-gcd.js

brain-progression:
	node bin/game-progression.js

brain-prime:
	node bin/game-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
