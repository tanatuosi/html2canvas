import {IPropertyValueDescriptor, PropertyDescriptorParsingType} from '../IPropertyDescriptor';
import {Context} from '../../core/context';
import {CSSValue} from '../syntax/parser';
import {TokenType} from '../syntax/tokenizer';

export const filter: IPropertyValueDescriptor<string> = {
    name: `filter`,
    initialValue: 'none',
    prefix: false,
    type: PropertyDescriptorParsingType.VALUE,
    parse: (_context: Context, token: CSSValue) => {
        if (token.type === TokenType.IDENT_TOKEN && token.value === 'none') {
            return 'none';
        }

        if (token.type === TokenType.FUNCTION) {
            const value = token.values[0];
            if (value.type === TokenType.DIMENSION_TOKEN) return value.number + value.unit;
        }

        return 'none';
    }
};
