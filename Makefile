task:
	mkdir -p $(c)
	mkdir -p $(c)/$(t)
	cp template.md $(c)/$(t)
	mv $(c)/$(t)/template.md $(c)/$(t)/description.md
	touch $(c)/$(t)/index.js 

