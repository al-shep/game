(function(window, _) {
  window.game = window.game || {
    numz: {},
    phyz: {
      getDistance: function (pointA, pointB) {
        const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        return distance
      }
    }
  }
}(window, window._))

// idk what i'm supposed to be doing so i am doing this