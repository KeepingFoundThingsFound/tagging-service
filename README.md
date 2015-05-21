# tagging-service
An example of a portable service that uses itemMirror

## How to use?
When you import this script into a page, it adds to the global: "tagging"

Using this, you can pass in an itemMirror object, and add or remove tags to associations.

For example:

```js
var mirror = ... // Constructed earlier
var guid = ... // Association we want to add a tag to

tagging.addTag(mirror, guid, 'school');
tagging.addTag(mirror, guid, 'INFX598');
```

This would add the tag 'school' and 'INFX598' to that association. All of this is done through a namespace attribute, but
this is easier and more friendly to access.

If we wanted to get the tags back we just do the following

```js
tagging.listTags(mirror, guid) // ['school', 'INFX598']
```

## Functions

- __mirror__ refers to an itemMirror object
- __guid__ refers to a valid association's guid for that itemMirror object
- __tag__ is a string

### addTag(mirror, guid, tag)
Adds a tag to an association

### deleteTag(mirror, guid, tag)
Removes a tag from an association

### listTags(mirror, guid)
Returns an array of all the tags for an association
