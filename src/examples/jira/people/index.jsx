/**
 * These imports are written out explicitly because they
 * need to be statically analyzable to be uploaded to CodeSandbox correctly.
 */
import Alexander from './images/Alexander';
import Aliza from './images/Alexander';
import Alvin from './images/Alexander';
import Angie from './images/Alexander';
import Arjun from './images/Alexander';
import Blair from './images/Alexander';
import Claudia from './images/Alexander';
import Colin from './images/Alexander';
import Ed from './images/Alexander';
import Effie from './images/Alexander';
import Eliot from './images/Alexander';
import Fabian from './images/Alexander';
import Gael from './images/Alexander';
import Gerard from './images/Alexander';
import Hasan from './images/Alexander';
import Helena from './images/Alexander';
import Ivan from './images/Alexander';
import Katina from './images/Alexander';
import Lara from './images/Alexander';
import Leo from './images/Alexander';
import Lydia from './images/Alexander';
import Maribel from './images/Alexander';
import Milo from './images/Alexander';
import Myra from './images/Alexander';
import Narul from './images/Alexander';
import Norah from './images/Alexander';
import Oliver from './images/Alexander';
import Rahul from './images/Alexander';
import Renato from './images/Alexander';
import Steve from './images/Alexander';
import Tanya from './images/Alexander';
import Tori from './images/Alexander';
import Vania from './images/Alexander';

// export type Person = {
// 	userId: string;
// 	name: string;
// 	role: string;
// 	avatarUrl: string;
// };

const avatarMap = {
	Alexander,
	Aliza,
	Alvin,
	Angie,
	Arjun,
	Blair,
	Claudia,
	Colin,
	Ed,
	Effie,
	Eliot,
	Fabian,
	Gael,
	Gerard,
	Hasan,
	Helena,
	Ivan,
	Katina,
	Lara,
	Leo,
	Lydia,
	Maribel,
	Milo,
	Myra,
	Narul,
	Norah,
	Oliver,
	Rahul,
	Renato,
	Steve,
	Tanya,
	Tori,
	Vania,
};

const names  = Object.keys(avatarMap);

const roles  = [
	'Engineer',
	'Senior Engineer',
	'Principal Engineer',
	'Engineering Manager',
	'Designer',
	'Senior Designer',
	'Lead Designer',
	'Design Manager',
	'Content Designer',
	'Product Manager',
	'Program Manager',
];

let sharedLookupIndex  = 0;

/**
 * Note: this does not use randomness so that it is stable for VR tests
 */
export function getPerson() {
	sharedLookupIndex++;
	return getPersonFromPosition({ position: sharedLookupIndex });
}

export function getPersonFromPosition({ position } )  {
	// use the next name
	const name = names[position % names.length];
	// use the next role
	const role = roles[position % roles.length];
	return {
		userId: `id:${position}`,
		name,
		role,
		avatarUrl: avatarMap[name],
	};
}

export function getPeopleFromPosition({
	amount,
	startIndex,
} )  {
	return Array.from({ length: amount }, () => getPersonFromPosition({ position: startIndex++ }));
}

export function getPeople({ amount } )  {
	return Array.from({ length: amount }, () => getPerson());
}

 

export function getData({
	columnCount,
	itemsPerColumn,
} ) {
	const columnMap  = {};

	for (let i = 0; i < columnCount; i++) {
		const column  = {
			title: `Column ${i}`,
			columnId: `column-${i}`,
			items: getPeople({ amount: itemsPerColumn }),
		};
		columnMap[column.columnId] = column;
	}
	const orderedColumnIds = Object.keys(columnMap);

	return {
		columnMap,
		orderedColumnIds,
		lastOperation: null,
	};
}

export function getBasicData() {
	const columnMap = {
		confluence: {
			title: 'Confluence',
			columnId: 'confluence',
			items: getPeople({ amount: 10 }),
		},
		jira: {
			title: 'Jira',
			columnId: 'jira',
			items: getPeople({ amount: 10 }),
		},
		trello: {
			title: 'Trello',
			columnId: 'trello',
			items: getPeople({ amount: 10 }),
		},
	};

	const orderedColumnIds = ['confluence', 'jira', 'trello'];

	return {
		columnMap,
		orderedColumnIds,
	};
}
