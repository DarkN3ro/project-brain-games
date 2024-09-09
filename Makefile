install:
	npm ci

my-brain-games:
	node bin/my-brain-games.js

game-even:
	node bin/game-even.js

game-calc:
	node bin/game-calc.js

game-gcd:
	node bin/game-gcd.js

game-progression:
	node bin/game-progression.js

game-prime:
	node bin/game-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
