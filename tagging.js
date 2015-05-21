// Put everything in a closure to prevent polluting the global
// namespace.  When this function executes it will create the tagging
// object with all of our functions
(function() {

  // Our namespace for the tagging service
  var TAGGING_NS = 'tagging';
  // The name of the attribute we'll be working with
  var TAGGING_ATTRIBUTE = 'tags';

  // Fetches the tags as parsed from the attribute
  function getTags(mirror, guid) {
    var result = mirror.getAssociationNamespaceAttribute(TAGGING_ATTRIBUTE, guid, TAGGING_NS);
    return result ? JSON.parse(result) : {};
  }

  function saveTags(mirror, guid, tags) {
    mirror.setAssociationNamespaceAttribute(TAGGING_ATTRIBUTE, JSON.stringify(tags), guid, TAGGING_NS);
  }

  // These are the functions that we will make public to anyone who
  // wants to use the service
  var service = {
    // Adds a tag to an association
    addTag: function(mirror, guid, tag) {
      var tags = getTags(mirror, guid);
      tags[tag] = true;
      saveTags(mirror, guid, tags);
    },

    // Deletes a given tag from an association
    deleteTag: function(mirror, guid, tag) {
      var tags = getTags(mirror, guid);
      delete tags[tag];
      saveTags(mirror, guid, tags);
    },

    // Lists the tags that an association has
    listTags: function(mirror, guid) {
      var tags = getTags(mirror, guid);
      return Object.keys(tags);
    }
  };

  return (window.tagging = service);
})();
