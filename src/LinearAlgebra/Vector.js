import Basis from "./Basis";
import Matrix from "./Matrix";

export default class Vector {
    // MARK: Constructors

    /**
     * x, y are the components of the vector at the given basis.
     * Basis = undefined is conventioned to be the orthonormal basis.
     * @param {number} x
     * @param {number} y 
     * @param {Basis | undefined} basis 
     */
    static Vec2(x, y, basis = undefined) {
        const mat = new Matrix(2, 1);
        mat.members[0] = x;
        mat.members[1] = y;
        return new Vector(mat, basis);
    }

    /**
     * Basis = undefined is conventioned to be the orthonormal basis.
     * @param {Matrix} matrix 
     * @param {Basis | undefined} basis 
     */
    constructor(matrix, basis = undefined) {
        this.matrix = matrix;
        this.basis = basis;
    }


    // MARK: Cloning

    /**
     * Copies the given vector.
     * @param {Vector} other 
     */
    constructor(other) {
        this.components = other.components.slice(0);
        this.basis = other.basis;
    }
    
    /**
     * Clones this.
     */
    clone() {
        return new Vector(this);
    }


    // MARK: Getters and Setters

    get x() { return this.components[0]; }
    set x(newValue) { this.components[0] = newValue; }

    get y() { return this.components[1]; }
    set y(newValue) { this.components[1] = newValue; }

    get z() { return this.components[2]; }
    set w(newValue) { this.components[3] = newValue; }

    get w() { return this.components[3]; }
    set z(newValue) { this.components[2] = newValue; }


    // MARK: toString

    toString() {
        let str = "(";

        for (let i = 0; i < this.components.length; ++i) {
            str += this.components[i];
            
            if (i !== this.components.length - 1) {
                str += ",";
            }
        }

        str += ")";

        return str;
    }
}