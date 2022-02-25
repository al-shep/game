(function(window, _) {
  window.game = window.game || {
    numz: {

      /**
       * Returns the degree of the angle between two points. This method caclulates
       * said angle by pulling the x and y coodinates from the objects pointA and 
       * pointB
       * 
       * @param {Object} pointA : used to gather the coordinates for point A
       * @param {Object} pointB : used to gather the coordiantes for point B
       * @returns {Number}      : the degree of the angle between object A and B 
       */
      getAngleDegrees: function (pointA, pointB) {
        const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          radians = Math.atan2(distanceY, distanceX),
          degrees = radians * 180 / Math.PI 
        return degrees
      },

      /**
       * Converts degrees to radians
       * 
       * @param {Number} degrees: the degree you want to convert to radians
       * @returns {Number}        the radian form of the entered degree
       */
      degreesToRadians: function (degrees) {
        return degrees * Math.PI / 180
      },

      /**
       * Converts radians to degrees
       * 
       * @param {Number} radians: the radian you want to convert to radians         
       * @returns {Number}        the degree form of the entered radian
       */
      radiansToDegrees: function (radians) {
        return radians * 180 / Math.PI
      }

    },
    phyz: {

      /**
       * Returns the distance between two points which are found through the 
       * objects pointA and pointB.
       * 
       * @param {Object} pointA : an object from which the first coordinates are extracted
       * @param {Object} pointB : an object from which the second coordinates are extracted
       * @returns {Number}      : the distance between the two points on the objects
       */
      getDistance: function (pointA, pointB) {
        const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        return distance
      },

      /**
       * Returns an Object with basic properties utilized in a 2D physics system.
       * On top of simply physics properties, the body has template methods
       * handleCollision() and update()
       * 
       * @param  {String} type:                       A String, should be unique to your system, representing the type of body 
       * @param  {Object} options. 
       * @param  {Number} options.velocityX:          The body's velocity on the x scale
       * @param  {Nubmer} options.velocityY:          The body's velocity on the y axis
       * @param  {Number} options.rotationalVelocity: The body's rotation velocity
       * @param  {Number} options.integrity:          The body's integrity. Binary value. 0 - the body should break apart of explode, 1 - the body is intact
       * @param  {Number} options.density:            The body's density. Can be used to calculate collission force, using the ratio of densities to determine kinetic energy distribution of the colliding bodies.
       * @param  {Number} options.volatility:         The body's volatility/instability. Can be used to calculate how unstable or explosive an object may be. Can be used as a multiplier to the force of a collision. 
       * @returns {Object}                            The body
       */
      makeBody: function (type, {
        velocityX = 0,
        velocityY = 0,
        rotationalVelocity = 0,
        integrity = 1,
        density = 1,
        volatility = 0
      } = {}) {
        if (type === undefined) throw new Error("You must provide a valid String for the type parameter!")
        return {
          velocityX = velocityX,
          velocityY = velocityY,
          rotationalVelocity = rotationalVelocity,
          integrity = integrity,
          density = density,
          volatility = volatility,

          /**
           * A template method to create a handleCollisions() function
           * @param {Number}: A number representing the force of the impact
           * @param {Object}: The other body involved in the collision 
           */
          handleCollision: function(impact, body) {
            // template method //
          },

          /**
           * can be overridden in the body to provide a custom update() method
           * 
           * @param {Object} event : the event object that will be used to dynamically update whatever is within the update function
           */ 
          update(event) {
            // template method //
          }
        }
      },
    },
  }
}(window, window._))
